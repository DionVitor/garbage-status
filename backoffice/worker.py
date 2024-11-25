from os import environ

from celery import Celery


app = Celery(
    'worker',
    broker=environ.get("CELERY_BROKER_URL", "amqp://rabbit_g:rabbit_g@garbage_status_queue:5672"),
    include=["backoffice.tasks"]
)

app.conf.task_routes = {"backoffice.tasks.check_stations": "worker_queue"}
app.conf.beat_schedule = {
    "check-stations-every-5-seconds": {
        "task": "backoffice.tasks.check_stations",
        "schedule": 5,
        "args": ()
    }
}
