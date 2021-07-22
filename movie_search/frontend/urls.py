from django.urls import path
from .views import index

#directory of urls for frontend
urlpatterns = [
    path('', index),
    path('search-results', index)
]