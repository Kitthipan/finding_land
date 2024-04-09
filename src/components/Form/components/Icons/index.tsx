// import { LucideProps } from 'lucide-react';
// // import dynamicIconImports from 'lucide-react/dynamicIconImports';
// import dynamic from 'next/dynamic';

// // interface IconProps extends LucideProps {
// //   name: keyof typeof dynamicIconImports;
// // }

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = dynamic(dynamicIconImports[name])

//   return <LucideIcon {...props} />;
// };

// export default Icon;

import * as icons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import React, { createElement } from 'react'

export type IconName = Omit<
  typeof icons,
  | 'createReactComponent'
  | 'createLucideIcon'
  | 'IconNode'
  | 'LucideIcon'
  | 'LucideProps'
>

type IconProps = LucideProps & {
  name: keyof IconName
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const icon = icons[name]
  if (icon) {
    return createElement(icon, props)
  }

  return null
}

export default Icon