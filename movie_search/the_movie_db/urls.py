from django.urls import path
from .views import SearchResult

urlpatterns = [
    path('search/<query>', SearchResult.as_view())
]