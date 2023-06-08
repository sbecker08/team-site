"use client";

import HeroBanner from '../../component/HeroBanner/HeroBanner';
import AboutUs from '../../component/AboutUs/AboutUs';
import styles from'./page.module.css';
import Image from 'next/image';

export default function Page() {

  var textToShow = "This is the text to show";
  var moreTextToShow = "This is more text to edit";

  const onTextChange = (e) => {
    console.log("parent text change");
  }

    return (
      <Query
        contentType="Page"
        query={{
          'fields.slug[in]': `/${props.match.slug || ''}`,
        }}
      >
        {({data, error, fetched, loading}) => {
      if (loading || !fetched) {
        return <p>Loading...</p>;
      }

      if (error) {
        console.error(error);
        return <p>Error</p>;
      }

      if (!data) {
        return <p>Page does not exist.</p>;
      }

      // See the Contentful query response
      console.debug(data);

      // Process and pass in the loaded `data` necessary for your page or child components.
      return (
        <div>
            <HeroBanner></HeroBanner>
          </div>
      );
      }}
          
      </Query>
    );
  }