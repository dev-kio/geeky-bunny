import { Text } from '@mantine/core';
import ProfileCard from '@/app/about/components/ProfileCard';

export default async function About() {
  return (
    <div className="flex flex-col p-4 m-4 text-baseZero">
      <div className="flex flex-col items-center mb-4">
        <Text className="text-5xl mx-2">Sneak peek of me</Text>
      </div>
      <div className="flex flex-col items-center my-4">
        <ProfileCard />
      </div>
    </div>
  );
}
