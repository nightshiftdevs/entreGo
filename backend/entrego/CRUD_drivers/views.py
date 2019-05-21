from django.shortcuts import render
from CRUD_drivers.models import Drivers
from CRUD_drivers.serializer import DriversSerializer
from rest_framework import mixins
from rest_framework import generics
from django.views.generic import TemplateView
from django.http import HttpResponse


class DriversList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Drivers.objects.all()
    serializer_class = DriversSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class DriversDetails(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Drivers.objects.all()
    serializer_class = DriversSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)



# Create your views here.
