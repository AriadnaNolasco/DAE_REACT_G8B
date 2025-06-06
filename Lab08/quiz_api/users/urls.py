from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)
router.register(r'quiz-attempts', views.QuizAttemptViewSet)

urlpatterns = [
    path('', include(router.urls)),
]