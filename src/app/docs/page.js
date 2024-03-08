"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const Docs = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://docusaurus.io/');
  }, []);

  return null;
};

export default Docs;