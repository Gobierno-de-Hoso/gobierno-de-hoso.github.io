import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Ministerios',
      links: [
        {
          text: 'Exterior',
          href: getPermalink('/ministerio/exterior'),
        },
        {
          text: 'Interior',
          href: getPermalink('/ministerio/interior'),
        },
        {
          text: 'Defensa',
          href: getPermalink('/ministerio/defensa'),
        },
        {
          text: 'Tecnología e Innovación',
          href: getPermalink('/ministerio/tecnologia'),
        },
        {
          text: `Turismo`,
          href: getPermalink('/ministerio/turismo')
        },
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Validación de documentos',
          href: getPermalink('/docs'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink()
    },
    {
      text: 'Embajadas',
      href: '#',
    },
    {
      text: 'Transparencia',
      href: getPermalink('/transparencia')
    }
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Ministerios',
      links: [
        { text: 'Ministerio de Relaciones Exteriores', href: getPermalink('/ministerios/relaciones-exteriores') },
        { text: 'Ministerio de Educación', href: getPermalink('/ministerios/educacion') },
        { text: 'Ministerio de Salud', href: getPermalink('/ministerios/salud') },
        { text: 'Ministerio de Tecnología', href: getPermalink('/ministerios/tecnologia') },
        { text: 'Ministerio de Medio Ambiente', href: getPermalink('/ministerios/medio-ambiente') },
      ],
    },
    {
      title: 'Sobre Hoso',
      links: [
        { text: 'Acerca de', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreras', href: '#' },
        { text: 'Prensa', href: '#' },
        { text: 'Inclusión', href: '#' },
        { text: 'Impacto Social', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/santacrc/' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="https://fabianalvarez.dev/"> SantaCRC</a> · Todos los derechos reservados.
  `,
};

