"use client";

import HeroBanner from '../component/HeroBanner/HeroBanner';
import AboutUs from '../component/AboutUs/AboutUs';
import PublishBar from '../component/PublishBar/PublishBar';
import { Query } from 'react-contentful';
import { createClient } from 'contentful-management'
//import { Draggable } from "react-drag-reorder";

import React, { useContext, useState } from 'react';
import { EditableZone } from '../modules/EditableModule/EditableZone';

export default function Page({ props }) {

  const pageKey = '7hy38EXg1i0GeLhelY0IHT';

  const contentfulClient = createClient(
    {
      accessToken: 'CFPAT-1SoWBCp4xUFEpUPO6a2QO9KnudqL9z0r6YXyLwLalx0',
    }
  );

  const toggleData = () => {
    //editableZoneContext.setEditable(!demoContext.isEditable);
  }

  const getChangedPos = async (currentPosition, newPosition) => {
    contentfulClient.getSpace('7or0qllst114').then((space) => {
      // This API call will request an environment with the specified ID
      space.getEnvironment('master').then((environment) => {
        environment.getEntry(pageKey).then((entry) => {
          console.log(entry);
        })
      })
    });
  }

  const onAboutUsChanged = async (key, data) => {
    contentfulClient.getSpace('7or0qllst114').then((space) => {
      // This API call will request an environment with the specified ID
      space.getEnvironment('master').then((environment) => {
        environment.getEntry(key).then((entry) => {
          entry.fields.title['en-US'] = data.title;
          entry.fields.aboutUs['en-US'] = data.aboutUs;
          entry.update().then((e) => {
            e.publish().then((s) => {});
          });

        })
      })
    })
  }

  return (
    <EditableZone isContentEditable={true}>
      <Query
        contentType="Home Page"
        id={pageKey}>
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

            console.log(data)

            return (
              <div>        
                  <HeroBanner isContentEditable={false} headline={data.fields.headline} buttonText={data.fields.subtitle} ></HeroBanner>
                  <button onClick={toggleData}>Don't Click Me Bro</button>
                  {
                    /*editableZoneContext.isEditable ? 
                    (
                      <Draggable  onPosChange={getChangedPos}>
                        {
                          data.fields.components.map((c, index) => {
                            if(c.sys.contentType.sys.id == 'aboutUsComponent'){
                              return <AboutUs isOddStyle={index % 2} contentChanged={onAboutUsChanged} key={c.sys.id} contentId={c.sys.id} title={c.fields.title} aboutUs={c.fields.aboutUs} ></AboutUs>
                            }
                          })
                        }
                      </Draggable>
                    ) :*/
                    (
                      <>
                        {
                          data.fields.components.map((c, index) => {
                            if(c.sys.contentType.sys.id == 'aboutUsComponent'){
                              return <AboutUs isOddStyle={index % 2} contentChanged={onAboutUsChanged} key={c.sys.id} contentId={c.sys.id} title={c.fields.title} aboutUs={c.fields.aboutUs} ></AboutUs>
                            }
                          })
                        }
                      </>
                    )
                  }

                  <PublishBar></PublishBar>
              </div>
            );
            }}        
      </Query>
    </EditableZone>
  );
  }