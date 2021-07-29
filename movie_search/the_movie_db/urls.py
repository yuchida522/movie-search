from django.urls import path
from .views import SearchResult

#specifies endpoints event more
urlpatterns = [
    path('search/<query>', SearchResult.as_view())
]