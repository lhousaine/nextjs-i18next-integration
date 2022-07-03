// This import is not related to fetching translations from backend.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { Suspense } from 'react';

export default function About({ message }) {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <h1>{message}</h1>
    </Suspense>
  );
}

export async function getStaticProps({ locale }) {
  const { message } = await fetch(
    // forward the locale value to the server via query params
    `https://next-i18n-example-cg.vercel.app/api/about?lang=${locale}`
  ).then((res) => res.json());
  return {
    props: {
      message,
      // The code below is not related to fetching translations from backend.
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
