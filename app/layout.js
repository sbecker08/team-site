"use client";

import '../global.css';
import { Frank_Ruhl_Libre } from 'next/font/google';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import React from 'react';

const frankRuhl300 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '300' })
const frankRuhl400 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '400' })
const frankRuhl700 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '700' })

const contentfulClient = new ContentfulClient({
  accessToken: '4-8dIzY4_Dy4Yx2XFwJlHNgyPl1FHMiznoA_O2_yas0',
  space: '7or0qllst114',
});

export default function RootLayout({ children }) {
    return (
      <ContentfulProvider client={contentfulClient}>
        <html lang="en">
          <head>          
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="This is the teamsite of a broker team at Marcus and Millichap"></meta>
            <title>Marcus and Millichap Team Site</title>
          </head>
          
          <body>
              {children}
          </body>
        </html>
      </ContentfulProvider>
    );
  }