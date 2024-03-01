interface CampProps {
  backgroundimage: string;
  title: string;
  submit: string;
  peopleJoined: string;
}
const CampSite = ({
  backgroundimage,
  title,
  submit,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundimage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 "></div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundimage="bg-bg-img-1"
          title="Putuk Truno Camp"
          submit="Prigen Pasuruan"
          peopleJoined="50+ Joined"
        ></CampSite>
        <CampSite></CampSite>
      </div>
    </section>
  );
};

export default Camp;
