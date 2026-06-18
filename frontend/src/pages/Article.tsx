import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ClockIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { getPost } from '../data/posts';
import { SITE } from '../data/site';
export function Article() {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  if (!post) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-3xl font-semibold text-ink">
          Article not found
        </h1>
        <Link
          to="/travel-guide"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-500">
          
          <ArrowLeftIcon className="h-4 w-4" /> Back to Travel Guide
        </Link>
      </main>);

  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    articleSection: post.category,
    publisher: {
      '@type': 'Organization',
      name: SITE.name
    },
    mainEntityOfPage: `${SITE.url}/travel-guide/${post.slug}`
  };
  return (
    <>
      <Seo
        title={`${post.title} | Kenya Welcome Concierge`}
        description={post.excerpt}
        path={`/travel-guide/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={articleSchema} />
      

      <article className="bg-sand-50 pb-20">
        <div className="relative flex min-h-[48vh] items-end overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" />
          <div className="relative mx-auto w-full max-w-3xl px-5 pb-10 pt-28">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              {post.category}
            </span>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white">
              {post.title}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-sand-100/90">
              <ClockIcon className="h-4 w-4" /> {post.readTime}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 pt-10">
          <Link
            to="/travel-guide"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-clay-500">
            
            <ArrowLeftIcon className="h-4 w-4" /> Back to Travel Guide
          </Link>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
            {post.body.map((para, i) =>
            <p key={i}>{para}</p>
            )}
          </div>

          <div className="mt-10 rounded-2xl bg-savanna-700 p-8 text-center text-sand-100">
            <h2 className="font-serif text-2xl font-semibold text-white">
              Ready to plan your trip?
            </h2>
            <p className="mt-2 text-sand-100/80">
              Let our concierge team turn this guide into a real itinerary.
            </p>
            <Link
              to="/plan-my-trip"
              className="mt-5 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-400">
              
              Plan My Trip
            </Link>
          </div>
        </div>
      </article>
    </>);

}