import sqlite3
import os

from backoffice.worker import app


@app.task
def check_stations():
    db_path = os.path.join(os.getcwd(), "backend/db.sqlite3")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute("SELECT id, volume_percentage FROM station_station WHERE volume_percentage >= 80;")
    stations = cursor.fetchall()

    for station in stations:
        station_id = station[0]
        volume_percentage = station[1]

        cursor.execute("""
            SELECT action_type
            FROM station_stationaction
            WHERE station_id = ?
            ORDER BY created_at DESC
            LIMIT 1;
        """, (station_id,))
        last_action = cursor.fetchone()

        if last_action:
            last_action_type = last_action[0]
            if last_action_type != "over_capacity":
                print(last_action_type)
                cursor.execute(f"""
                    INSERT INTO station_stationaction (station_id, action_type, metadata, created_at)
                    VALUES (?, ?, ?, datetime('now'));
                """, (station_id, 'over_capacity', f'{{"volume_percentage": {volume_percentage}}}'))

    conn.commit()
    cursor.close()
    conn.close()
