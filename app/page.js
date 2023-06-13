"use client";

import HeroBanner from '../component/HeroBanner/HeroBanner';
import AboutUs from '../component/AboutUs/AboutUs';
import PublishBar from '../component/PublishBar/PublishBar';
import { useContentful } from 'react-contentful';
import { createClient } from 'contentful-management'
//import { Draggable } from "react-drag-reorder";

import React, { useContext, useState } from 'react';
import { EditableZone } from '../modules/EditableModule/EditableZone';
import EditableComponent from '../modules/EditableModule/EditableComponent/EditableComponent';

export default function Page({ props }) {

  const pageKey = '7hy38EXg1i0GeLhelY0IHT';

  const contentfulClient = createClient(
    {
      accessToken: 'CFPAT-1SoWBCp4xUFEpUPO6a2QO9KnudqL9z0r6YXyLwLalx0',
    }
  );

  const { data, error, fetched, loading } = useContentful({
    id: pageKey
  });

  const onAboutUsChanged = async (key, data) => {
    /*
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
    })*/
  }



  const publishKey = async (key, data) => {
    contentfulClient.getSpace('7or0qllst114').then((space) => {
      space.getEnvironment('master').then((environment) => {
        environment.getEntry(key).then((entry) => {
          data.update().then((e) => {
            e.publish().then((s) => {});
          });

        })
      })
    })
  }

  var initialData = {};
  initialData[pageKey] = data;

  if(data) {
    return (
      <EditableZone isContentEditable={true} publishKey={publishKey} initialData={initialData}>
        <div>   
            <EditableComponent >
              <HeroBanner data={data.fields} headlineFunction={(d) => d?.fields?.headline} buttonTextFunction={(d) => d?.fields?.subtitle} ></HeroBanner>
            </EditableComponent>
              {
                data.fields.components.map((c, index) => {
                  if(c.sys.contentType.sys.id == 'aboutUsComponent'){
                    return <AboutUs isOddStyle={index % 2} contentChanged={onAboutUsChanged} key={c.sys.id} contentId={c.sys.id} title={c.fields.title} aboutUs={c.fields.aboutUs} ></AboutUs>
                  } 
                  else if(c.sys.contentType.sys.id == 'researchComponent'){
                    
                  }
                })
              }
            <PublishBar></PublishBar>
        </div>      
      </EditableZone>
    )
  }
  else
  {
    return (<>No Data</>)
  }
            
  }