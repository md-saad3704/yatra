/* ===========================================================
   File       : toastService.js
   Folder     : services
   Purpose    : Centralized toast notifications.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import toast from "react-hot-toast";

export const showSuccess = (message) =>
  toast.success(message);

export const showError = (message) =>
  toast.error(message);

export const showInfo = (message) =>
  toast(message);

export const showLoading = (message) =>
  toast.loading(message);

export const dismissToast = (toastId) =>
  toast.dismiss(toastId);