import React from 'react'
import { usePageContext } from '../../hooks/usePageContext'

function Link(props: { href?: string; className?: string; activeClass?: string; children: React.ReactNode }) {
  const {href, className, activeClass, children} = props;

  const pageContext = usePageContext();

  const defaultClassName = [
    className,
    pageContext.urlPathname === href && activeClass !== undefined ? activeClass : "is-active"
  ]

  return <a {...props} className={defaultClassName.filter(Boolean).join(' ')} />
}

export { Link }
