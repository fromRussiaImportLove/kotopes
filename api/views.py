from rest_framework import status, viewsets, filters
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import PaymentsSerializer, AnimalsSerializer, TransactionsSerializer
from api.models import Payments, Animals, Transactions
from csv_import.import_data import import_payments
from django.http import HttpResponse, JsonResponse
from django_filters.rest_framework import DjangoFilterBackend
from utils.pandas_calculate import fcalc, ncalc


class PaymentsViewSet(viewsets.ModelViewSet):

    queryset = Payments.objects.all()
    serializer_class = PaymentsSerializer
    # lookup_field = 'shelter'
    search_fields = ['=user_id', '=shelter']
    filter_backends = [filters.SearchFilter]


class AnimalsViewSet(viewsets.ModelViewSet):

    queryset = Animals.objects.all()
    serializer_class = AnimalsSerializer


class TransactionsViewSet(viewsets.ModelViewSet):

    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


def import_payments_data(request):
    result = import_payments()
    return HttpResponse(result)


def calculate_history(request):
    queryset = Payments.objects.values('user_id', 'shelter', 'datetime', 'item', 'amount')
    result = fcalc(queryset)
    #return JsonResponse(result)
    return HttpResponse(result)


def calculate_newdata(request):
    min_price = int(request.POST['min_price'])
    n_sales = int(request.POST['n_sales'])
    result = ncalc(min_price, n_sales)
    return HttpResponse(result)