from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import PaymentsSerializer, AnimalsSerializer, TransactionsSerializer
from api.models import Payments, Animals, Transactions
from csv_import.import_data import import_payments
from django.http import HttpResponse


class PaymentsViewSet(viewsets.ModelViewSet):

    queryset = Payments.objects.all()
    serializer_class = PaymentsSerializer


class AnimalsViewSet(viewsets.ModelViewSet):

    queryset = Animals.objects.all()
    serializer_class = AnimalsSerializer


class TransactionsViewSet(viewsets.ModelViewSet):

    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


def import_payments_data(request):
    result = import_payments()
    return HttpResponse(result)
