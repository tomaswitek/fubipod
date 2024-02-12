import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import Image from "@/components/Image";
import {TeamBlock, TeamMember as TeamMemberProps} from "types";
import {client} from "api";

function TeamMember(props: TeamMemberProps, index: number) {
  const {name, job_title, image} = props;
  const size = 220;
  return (
    <div
      key={index}
      className="flex flex-col bg-bg-light rounded-xl text-gray-300 text-center py-6"
    >
      <div className="flex justify-center p-6">
        {image ? (
          <Image
            // TODO: remove after icons bg margins are fixed
            src={image}
            height={size}
            width={size}
            alt={name}
            className="rounded-full border-4 border-gray-300"
          />
        ) : (
          <a
            href="#"
            className="flex justify-center items-center rounded-full border-4 border-gray-300 text-9xl hover:border-white hover:text-white"
            style={{height: size, width: size}}
          >
            +
          </a>
        )}
      </div>
      <div className="text-xl">{name}</div>
      <div>{job_title}</div>
    </div>
  );
}

export async function Team(props: TeamBlock) {
  const {headline} = props;
  const members = await client.getTeamMembers();

  return (
    <BlockWrapper>
      <BlockTitle title={headline} />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 pt-12">
        {members.map(TeamMember)}
      </div>
    </BlockWrapper>
  );
}

export default Team;
