'use client';
import { useEffect, useState } from 'react';
import { deploymentPath } from '@/lib/deploymentPath';
import { useLanguage } from './LanguageProvider';

type Doctor = { id?: number; name: string; nameEn?: string; title: string; titleEn?: string; focus: string; focusEn?: string; bio?: string; credentials?: string; specialties?: string; philosophy?: string; image: string; enabled?: number | boolean };

export function useDoctors() {
  const { language } = useLanguage();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  useEffect(() => { fetch(deploymentPath('/api/doctors')).then((res) => res.ok ? res.json() : Promise.reject()).then((items: Doctor[]) => setDoctors(items)).catch(() => setDoctors([])); }, []);
  return doctors.map((doctor) => {
    const localizedDoctor = language === 'en'
      ? { ...doctor, name: doctor.nameEn || doctor.name, title: doctor.titleEn || doctor.title, focus: doctor.focusEn || doctor.focus }
      : doctor;
    return localizedDoctor;
  });
}
