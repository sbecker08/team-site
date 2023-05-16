import '../global.css';
import { Frank_Ruhl_Libre } from 'next/font/google';

const frankRuhl300 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '300' })
const frankRuhl400 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '400' })
const frankRuhl700 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '700' })

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>          
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Marcus and Millichap Team Site</title>
        </head>
        <body>
            {children}
        </body>
      </html>
    );
  }