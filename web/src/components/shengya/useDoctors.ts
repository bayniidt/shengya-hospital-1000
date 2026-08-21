'use client';
import { useEffect, useState } from 'react';
import { doctors as fallbackDoctors } from './data';
export function useDoctors() { const [doctors, setDoctors] = useState(fallbackDoctors); useEffect(() => { fetch('/api/doctors').then((res) => res.ok ? res.json() : Promise.reject()).then((items) => { if (items.length) setDoctors(items); }).catch(() => undefined); }, []); return doctors; }
