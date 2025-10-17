// API Configuration (to be updated when backend is ready)
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  
  // Patient
  PATIENT_PROFILE: '/patient/profile',
  PATIENT_APPOINTMENTS: '/patient/appointments',
  PATIENT_RECORDS: '/patient/records',
  PATIENT_PRESCRIPTIONS: '/patient/prescriptions',
  
  // Hospital
  HOSPITAL_PROFILE: '/hospital/profile',
  HOSPITAL_PATIENTS: '/hospital/patients',
  HOSPITAL_APPOINTMENTS: '/hospital/appointments',
  HOSPITAL_DOCTORS: '/hospital/doctors',
  
  // Doctors
  DOCTORS_LIST: '/doctors',
  DOCTOR_DETAIL: '/doctors/:id',
  DOCTOR_AVAILABILITY: '/doctors/:id/availability',
  
  // Appointments
  APPOINTMENTS: '/appointments',
  APPOINTMENT_DETAIL: '/appointments/:id',
  APPOINTMENT_CANCEL: '/appointments/:id/cancel',
  APPOINTMENT_RESCHEDULE: '/appointments/:id/reschedule',
};

// User Types
export const USER_TYPES = {
  PATIENT: 'patient',
  HOSPITAL: 'hospital',
  DOCTOR: 'doctor',
  ADMIN: 'admin',
};

// Appointment Status
export const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  NO_SHOW: 'no-show',
};

// Medical Record Types
export const RECORD_TYPES = {
  LAB_REPORT: 'Lab Report',
  IMAGING: 'Imaging',
  PRESCRIPTION: 'Prescription',
  VACCINATION: 'Vaccination',
  CONSULTATION: 'Consultation',
  DIAGNOSIS: 'Diagnosis',
};

// Medical Specialties
export const SPECIALTIES = [
  'Cardiology',
  'Dermatology',
  'General Physician',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Surgery',
  'Urology',
];

// Gender Options
export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

// Blood Groups
export const BLOOD_GROUPS = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
];

// Hospital Types
export const HOSPITAL_TYPES = [
  { value: 'general', label: 'General Hospital' },
  { value: 'specialized', label: 'Specialized Hospital' },
  { value: 'clinic', label: 'Clinic' },
  { value: 'diagnostic', label: 'Diagnostic Center' },
  { value: 'maternity', label: 'Maternity Hospital' },
];

// Days of Week
export const DAYS_OF_WEEK = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

// Time Slots (for appointment booking)
export const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
];

// File Upload Limits
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'],
  ALLOWED_EXTENSIONS: ['.pdf', '.png', '.jpg', '.jpeg'],
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'YYYY-MM-DD',
  DATETIME: 'MMM DD, YYYY hh:mm A',
};

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s-()]{10,}$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
};

// Toast/Alert Duration
export const TOAST_DURATION = {
  SUCCESS: 3000,
  ERROR: 5000,
  INFO: 4000,
  WARNING: 4000,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'medilink_auth_token',
  USER_TYPE: 'medilink_user_type',
  USER_DATA: 'medilink_user_data',
  THEME: 'medilink_theme',
  LANGUAGE: 'medilink_language',
};

// Navigation Paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  
  // Patient Routes
  PATIENT_DASHBOARD: '/patient/dashboard',
  PATIENT_APPOINTMENTS: '/patient/appointments',
  PATIENT_RECORDS: '/patient/records',
  PATIENT_DOCTORS: '/patient/doctors',
  PATIENT_SETTINGS: '/patient/settings',
  
  // Hospital Routes
  HOSPITAL_DASHBOARD: '/hospital/dashboard',
  HOSPITAL_PATIENTS: '/hospital/patients',
  HOSPITAL_APPOINTMENTS: '/hospital/appointments',
  HOSPITAL_DOCTORS: '/hospital/doctors',
  HOSPITAL_ANALYTICS: '/hospital/analytics',
  HOSPITAL_SETTINGS: '/hospital/settings',
};

// Chart Colors (for analytics)
export const CHART_COLORS = {
  PRIMARY: '#1890ff',
  SUCCESS: '#52c41a',
  WARNING: '#faad14',
  ERROR: '#f5222d',
  INFO: '#1890ff',
  PURPLE: '#722ed1',
  CYAN: '#13c2c2',
  ORANGE: '#fa8c16',
};

// Status Colors Mapping
export const STATUS_COLORS = {
  confirmed: 'success',
  pending: 'warning',
  completed: 'info',
  cancelled: 'danger',
  active: 'success',
  inactive: 'default',
  approved: 'success',
  rejected: 'danger',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  REGISTER_SUCCESS: 'Registration successful!',
  UPDATE_SUCCESS: 'Updated successfully!',
  DELETE_SUCCESS: 'Deleted successfully!',
  APPOINTMENT_BOOKED: 'Appointment booked successfully!',
  APPOINTMENT_CANCELLED: 'Appointment cancelled successfully!',
  RECORD_UPLOADED: 'Medical record uploaded successfully!',
};
