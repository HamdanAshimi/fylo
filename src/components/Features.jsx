import AccessAnywhere from "../assets/images/icon-access-anywhere.svg";
import Security from "../assets/images/icon-security.svg";
import Collaboration from "../assets/images/icon-collaboration.svg";
import AnyFile from "../assets/images/icon-any-file.svg";

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 pt-12 dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        {/* First Row */}
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={AccessAnywhere} alt="" />
            </div>

            <h3 className="text-xl font-bold">
              Access your file from anywhere
            </h3>

            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={Security} alt="" />
            </div>

            <h3 className="text-xl font-bold">Security you can trust</h3>

            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={Collaboration} alt="" />
            </div>

            <h3 className="text-xl font-bold">Collaborate with others</h3>

            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={AnyFile} alt="" />
            </div>

            <h3 className="text-xl font-bold">Store any type of file</h3>

            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
