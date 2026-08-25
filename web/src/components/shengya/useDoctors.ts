'use client';
import { useEffect, useState } from 'react';
import { doctors as fallbackDoctors } from './data';
import { deploymentPath } from '@/lib/deploymentPath';
import { useLanguage } from './LanguageProvider';

type Doctor = typeof fallbackDoctors[number];

export function useDoctors() {
  const { language } = useLanguage();
  const [doctors, setDoctors] = useState<Doctor[]>(fallbackDoctors);
  useEffect(() => { fetch(deploymentPath('/api/doctors')).then((res) => res.ok ? res.json() : Promise.reject()).then((items: Doctor[]) => { if (items.length) { const remoteImages = new Set(items.map((item) => item.image)); setDoctors([...items, ...fallbackDoctors.filter((item) => !remoteImages.has(item.image))]); } }).catch(() => undefined); }, []);
  return doctors.map((doctor) => language === 'en' ? { ...doctor, name: doctor.nameEn || doctor.name, title: doctor.titleEn || doctor.title, focus: doctor.focusEn || doctor.focus } : doctor);
}
