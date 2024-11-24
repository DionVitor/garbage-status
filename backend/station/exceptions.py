from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework.exceptions import APIException
from django.http import Http404
from django.core.exceptions import PermissionDenied


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        return Response(
            {
                "error": True,
                "message": response.data.get("detail", "An error occurred"),
                "status_code": response.status_code,
            },
            status=response.status_code,
        )
    
    if isinstance(exc, Http404):
        return Response(
            {"error": True, "message": "Not found", "status_code": 404},
            status=404,
        )

    elif isinstance(exc, PermissionDenied):
        return Response(
            {"error": True, "message": "Permission denied", "status_code": 403},
            status=403,
        )

    else:
        return Response(
            {
                "error": True,
                "message": "An unexpected error occurred",
                "status_code": 500,
            },
            status=500,
        )


class StationNotFoundException(APIException):
    status_code = 404
    default_detail = "Station not found"
    default_code = "station_not_found"


class VolumePercentageInvalidException(APIException):
    status_code = 400
    default_detail = "Volume percentage must be between 0 and 100"
    default_code = "volume_percentage_invalid"
