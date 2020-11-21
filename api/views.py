from rest_framework import status, viewsets, filters
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

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

@csrf_exempt
def calculate_newdata(request):
    min_price = request.POST.get('min_price')
    n_sales = request.POST.get('n_sales')
    if min_price is not None and n_sales is not None:
        result = ncalc(int(min_price), int(n_sales))
        return HttpResponse(result)
    else:
        return HttpResponse('need post data: min_price, n_sales')