import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export default async function Home({
    params,
}: {
    params: Promise<{lang: Locale}>;
}) {
    const {lang} = await params;
    const dict = await getDictionary(lang); // en
    return <div>{dict.hero.headline}</div>;
}
