'use client';

import Image from 'next/image';
import H3 from '../ui/text/h3';
import { Project } from './content-section';

interface ContentCardProps extends Project {}

export default function ContentCard({ project_name, information, picture }: ContentCardProps) {
  return (
    <li className=" relative flex aspect-square w-1/4 items-center justify-center border border-primary90 border-opacity-10">
      <H3 textType={'heading'}>{project_name}</H3>
      <Image fill objectFit={'cover'} alt={`${project_name} picture`} src={picture.banner}></Image>
    </li>
  );
}
