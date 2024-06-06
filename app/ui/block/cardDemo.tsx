// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import Image from "next/image";
// import Heading from "../../../lib/heading";

// type CardProps = React.ComponentProps<typeof Card>;

// export function CardDemo({ className, ...props }: CardProps) {
//   return (
//     <>
//       <Heading title="My projects" headingLevel="h3" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {project.map((project) => (
//           <Card className="w-full overflow-hidden" key={project.id}>
//             <CardContent className="p-1">
//               <Image
//                 src="/meteomojo.png"
//                 width={1000}
//                 height={1000}
//                 alt="Picture of the project"
//                 objectFit="cover"
//                 className="h-full w-full rounded-lg object-cover"
//                 priority={true}
//               />
//             </CardContent>
//             <CardFooter className="text-lg font-medium px-1.5 py-1">
//               {project.project_name}
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// }
