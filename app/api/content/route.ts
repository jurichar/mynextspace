import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

// Dummy data
const posts = [
    {
    title: 'La Magie du Code Propre',
    slug: 'la-magie-du-code-propre',
    content: 'Dans le monde effervescent du développement informatique, le "clean code" est plus qu\'une compétence, c\'est un art. Il ne s\'agit pas seulement de créer des programmes qui fonctionnent, mais de construire des codes maintenables, évolutifs et compréhensibles. Découvrons ensemble les secrets du code propre dans cet article passionnant.',
  },
  {
    title: 'Voyage au Coeur de Next.js',
    slug: 'voyage-au-coeur-de-next-js',
    content: 'Next.js a révolutionné le monde du développement web en offrant une plateforme flexible et performante. De l\'optimisation des performances à la génération statique, nous explorerons dans cet article les nombreuses fonctionnalités qui font de Next.js un choix de prédilection pour les développeurs modernes.',
  },
  {
    title: 'React.js: Un Guide pour les Débutants',
    slug: 'react-js-un-guide-pour-les-debutants',
    content: 'React.js est devenu un incontournable dans le paysage du développement web. Dans cet article, nous démystifierons les concepts de base de React, et vous guiderons à travers les étapes pour construire votre première application React. Que vous soyez un débutant ou un développeur expérimenté cherchant à rafraîchir vos connaissances, ce guide est fait pour vous.',
  },
  {
    title: 'L\'Avenir de la Programmation Web',
    slug: 'l-avenir-de-la-programmation-web',
    content: 'Le monde de la programmation web est en constante évolution, avec de nouveaux frameworks et technologies qui apparaissent régulièrement. Dans cet article, nous jetterons un regard sur les tendances actuelles et ce que l\'avenir pourrait nous réserver dans le domaine du développement web. Préparez-vous pour un voyage fascinant dans le futur de la programmation web!',
  },
];

export async function GET() {

  const session = await getServerSession();
  
  return NextResponse.json(posts);
}