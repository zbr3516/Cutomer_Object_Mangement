from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def customer_home(request):
    return JsonResponse({"loginData":"password!321"})

