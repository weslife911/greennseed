from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path("token/refresh/", TokenRefreshView.as_view()),
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("register/", views.RegisterView.as_view(), name="register")
]