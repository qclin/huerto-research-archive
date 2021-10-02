import React from 'react';
import marked from 'marked';
import clsx from "clsx";


export default function MarkedText({
  text,
  ...props
}){
  const html = marked(text || '');
  const className = clsx(props.className)
  return (
    <div className={className} dangerouslySetInnerHTML={{__html: html}} />
  )
}
