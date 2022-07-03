import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SubscribeForm from '../components/SubscribeForm';

export default function Home() {
  // We want to get the translations from `home.json`
  const { t } = useTranslation('common');
  // Get the translation for `greeting` key
  return (
    <main>
      <div>{t('greeting')}</div>
      <SubscribeForm />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'built-in-demo',
        'newsletter', // Add newsletter translations
      ])),
    },
  };
}
