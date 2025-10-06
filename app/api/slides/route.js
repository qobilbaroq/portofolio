export async function GET() {
  const slides = [
    {
      image: "/slider/image1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/slider/image2.png",
      description:
        "t, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/slider/image3.png",
      description:
        "Lorem ipsum dolor sit amet,",
    },
    {
      image: "/slider/image4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/slider/image5.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return Response.json(slides)
}
