/**
 * MediBook Demo Data
 * ──────────────────
 * Mock data fallback when API returns empty results.
 * This does NOT modify backend — it only injects client-side data.
 */

export const DEMO_MODE_ENABLED = true;

export const mockDoctors = [
  {
    id: 'demo-doc-1',
    firstName: 'Priya',
    lastName: 'Sharma',
    designation: 'MBBS, MD',
    specialization: 'Cardiologist',
    price: 800,
    gender: 'female',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    college: 'AIIMS Delhi',
    experience: '12 years',
    rating: 4.8,
    reviewCount: 142,
    about: 'Dr. Priya Sharma is a renowned cardiologist with over 12 years of experience in treating cardiovascular diseases.',
    address: 'Koregaon Park, Pune',
    city: 'Pune',
    services: ['ECG', 'Echocardiography', 'Cardiac Consultation', 'Stress Test'],
    _isDemo: true,
  },
  {
    id: 'demo-doc-2',
    firstName: 'Rajesh',
    lastName: 'Patel',
    designation: 'MBBS, MS Ortho',
    specialization: 'Orthopedic Surgeon',
    price: 1000,
    gender: 'male',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
    college: 'KEM Hospital Mumbai',
    experience: '15 years',
    rating: 4.9,
    reviewCount: 203,
    about: 'Dr. Rajesh Patel specializes in joint replacement surgery and sports medicine.',
    address: 'Hinjewadi, Pune',
    city: 'Pune',
    services: ['Joint Replacement', 'Fracture Treatment', 'Sports Injury', 'Spine Surgery'],
    _isDemo: true,
  },
  {
    id: 'demo-doc-3',
    firstName: 'Ananya',
    lastName: 'Desai',
    designation: 'MBBS, MD Dermatology',
    specialization: 'Dermatologist',
    price: 600,
    gender: 'female',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964e4c8?auto=format&fit=crop&w=300&q=80',
    college: 'Sassoon Hospital Pune',
    experience: '8 years',
    rating: 4.7,
    reviewCount: 89,
    about: 'Dr. Ananya Desai provides expert dermatological care including acne treatment and cosmetic procedures.',
    address: 'Viman Nagar, Pune',
    city: 'Pune',
    services: ['Skin Treatment', 'Acne Management', 'Hair Loss Treatment', 'Cosmetic Dermatology'],
    _isDemo: true,
  },
  {
    id: 'demo-doc-4',
    firstName: 'Vikram',
    lastName: 'Singh',
    designation: 'MBBS, DM Neurology',
    specialization: 'Neurologist',
    price: 1200,
    gender: 'male',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
    college: 'NIMHANS Bangalore',
    experience: '18 years',
    rating: 4.9,
    reviewCount: 176,
    about: 'Dr. Vikram Singh is a leading neurologist specializing in stroke management and epilepsy treatment.',
    address: 'Baner, Pune',
    city: 'Pune',
    services: ['EEG', 'Stroke Management', 'Epilepsy Treatment', 'Headache Clinic'],
    _isDemo: true,
  },
  {
    id: 'demo-doc-5',
    firstName: 'Meera',
    lastName: 'Joshi',
    designation: 'MBBS, MD Pediatrics',
    specialization: 'Pediatrician',
    price: 500,
    gender: 'female',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=300&q=80',
    college: 'CMC Vellore',
    experience: '10 years',
    rating: 4.8,
    reviewCount: 234,
    about: 'Dr. Meera Joshi provides comprehensive pediatric care with a gentle approach that puts children at ease.',
    address: 'Kothrud, Pune',
    city: 'Pune',
    services: ['Child Health Checkup', 'Vaccination', 'Growth Monitoring', 'Neonatal Care'],
    _isDemo: true,
  },
  {
    id: 'demo-doc-6',
    firstName: 'Arjun',
    lastName: 'Nair',
    designation: 'MBBS, MS, MCh Gastro',
    specialization: 'Gastroenterologist',
    price: 900,
    gender: 'male',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    college: 'PGIMER Chandigarh',
    experience: '14 years',
    rating: 4.6,
    reviewCount: 118,
    about: 'Dr. Arjun Nair is an experienced gastroenterologist specializing in liver diseases and endoscopy.',
    address: 'Aundh, Pune',
    city: 'Pune',
    services: ['Endoscopy', 'Colonoscopy', 'Liver Treatment', 'Digestive Health'],
    _isDemo: true,
  },
];

export const mockTimeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "04:00 PM"
];

export const mockAppointments = [
  {
    id: 'demo-apt-1',
    patientInfo: { firstName: 'Rahul', lastName: 'Kumar', email: 'rahul@demo.com', phone: '+91 98765 43210' },
    doctor: mockDoctors[0],
    scheduleDate: '2026-04-07',
    scheduleTime: '10:00 AM',
    status: 'scheduled',
    reasonForVisit: 'General checkup',
    paymentStatus: 'paid',
    trackingId: 'MEDI-2026-001',
    _isDemo: true,
  },
  {
    id: 'demo-apt-2',
    patientInfo: { firstName: 'Sneha', lastName: 'Iyer', email: 'sneha@demo.com', phone: '+91 98765 43211' },
    doctor: mockDoctors[2],
    scheduleDate: '2026-04-08',
    scheduleTime: '02:30 PM',
    status: 'confirmed',
    reasonForVisit: 'Skin consultation',
    paymentStatus: 'paid',
    trackingId: 'MEDI-2026-002',
    _isDemo: true,
  },
  {
    id: 'demo-apt-3',
    patientInfo: { firstName: 'Amit', lastName: 'Shah', email: 'amit@demo.com', phone: '+91 98765 43212' },
    doctor: mockDoctors[3],
    scheduleDate: '2026-04-10',
    scheduleTime: '11:00 AM',
    status: 'pending',
    reasonForVisit: 'Headache and dizziness',
    paymentStatus: 'unpaid',
    trackingId: 'MEDI-2026-003',
    _isDemo: true,
  },
];

export const mockReviews = [
  {
    id: 'demo-rev-1',
    doctor: mockDoctors[0],
    star: 5,
    description: 'Dr. Sharma was incredibly thorough and patient. She explained everything clearly and made me feel at ease. Highly recommended!',
    patient: { firstName: 'Rahul', lastName: 'Kumar' },
    createdAt: '2026-03-28T10:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-rev-2',
    doctor: mockDoctors[1],
    star: 5,
    description: 'Excellent surgeon! My knee replacement went perfectly. Dr. Patel and his team provided outstanding post-operative care.',
    patient: { firstName: 'Suresh', lastName: 'Menon' },
    createdAt: '2026-03-25T14:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-rev-3',
    doctor: mockDoctors[4],
    star: 4,
    description: 'Very gentle with kids. My daughter was comfortable throughout the examination. The clinic is well-maintained.',
    patient: { firstName: 'Pooja', lastName: 'Reddy' },
    createdAt: '2026-03-20T09:30:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-rev-4',
    doctor: mockDoctors[2],
    star: 5,
    description: 'Dr. Desai resolved my chronic skin issue that I had been dealing with for years. Thank you so much!',
    patient: { firstName: 'Kavitha', lastName: 'Nair' },
    createdAt: '2026-03-18T16:00:00Z',
    _isDemo: true,
  },
];

export const mockBlogPosts = [
  {
    id: 'demo-blog-1',
    title: '10 Heart-Healthy Habits You Can Start Today',
    description: 'Cardiovascular disease remains the leading cause of death globally. Here are evidence-based habits recommended by our cardiologists to keep your heart strong and healthy.',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    user: { firstName: 'Dr. Priya', lastName: 'Sharma' },
    createdAt: '2026-03-30T08:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-blog-2',
    title: 'Understanding Childhood Vaccinations: A Parent\'s Guide',
    description: 'Vaccinations are one of the most effective ways to protect your child from serious diseases. Learn about the recommended vaccination schedule and what to expect.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    user: { firstName: 'Dr. Meera', lastName: 'Joshi' },
    createdAt: '2026-03-27T10:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-blog-3',
    title: 'Winter Skin Care: Dermatologist-Approved Tips',
    description: 'Dry, flaky skin is a common complaint during winter months. Our dermatology expert shares a simple routine to keep your skin moisturized and glowing all season.',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80',
    user: { firstName: 'Dr. Ananya', lastName: 'Desai' },
    createdAt: '2026-03-24T12:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-blog-4',
    title: 'Managing Back Pain: When to See a Specialist',
    description: 'Back pain affects 8 out of 10 people at some point. Learn when home remedies are enough and when it\'s time to consult an orthopedic specialist.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    user: { firstName: 'Dr. Rajesh', lastName: 'Patel' },
    createdAt: '2026-03-20T14:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-blog-5',
    title: 'Nutrition and Brain Health: Foods That Boost Cognitive Function',
    description: 'What you eat directly impacts brain health. Our neurologist explains the link between nutrition and cognitive performance, plus the top brain-boosting foods.',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    user: { firstName: 'Dr. Vikram', lastName: 'Singh' },
    createdAt: '2026-03-15T09:00:00Z',
    _isDemo: true,
  },
  {
    id: 'demo-blog-6',
    title: 'Gut Health 101: Signs Your Digestive System Needs Attention',
    description: 'Your gut health affects everything from immunity to mood. Recognize the warning signs and learn simple steps to improve your digestive wellness.',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    user: { firstName: 'Dr. Arjun', lastName: 'Nair' },
    createdAt: '2026-03-12T11:00:00Z',
    _isDemo: true,
  },
];

/**
 * Hook-style helper: Use demo data as fallback when API returns empty.
 * Usage:
 *   const doctors = useDemoFallback(apiDoctors, mockDoctors);
 */
export const useDemoFallback = (apiData, demoData) => {
  if (!DEMO_MODE_ENABLED) return apiData;
  if (!apiData || (Array.isArray(apiData) && apiData.length === 0)) {
    return demoData;
  }
  return apiData;
};
