import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Collection = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <h2 className="text-base text-gray-800 dark:text-gray-200">
                Collection
              </h2>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-80 h-64 flex justify-between flex-wrap gap-2 bg-slate-100 dark:bg-slate-800 p-4">
                <NavigationMenuLink className="w-full flex items-center hover:opacity-50">
                  <img src="Summer.svg" alt="" className="w-12 h-12 mr-3" />
                  <div>
                    <h2 className="text-lg font-sans font-black dark:text-primary">
                      Summer Collection
                    </h2>
                    <p className="font-light font-sans text-xs dark:text-gray-300">
                      Checkout All the Summer Collections
                    </p>
                  </div>
                </NavigationMenuLink>

                <NavigationMenuLink className="w-full flex items-center hover:opacity-50">
                  <img src="/Winter.svg" className="w-12 h-12 mr-3" />
                  <div>
                    <h2 className="text-lg font-black dark:text-white">
                      Winter Collection
                    </h2>
                    <p className="font-light font-sans text-xs dark:text-gray-300">
                      Checkout All the Winter Collections
                    </p>
                  </div>
                </NavigationMenuLink>

                <NavigationMenuLink className="w-full flex items-center hover:opacity-50">
                  <img src="/Autmn.svg" className="w-12 h-12 mr-3" />
                  <div>
                    <h2 className="text-lg font-black dark:text-white">
                      Autumn Collection
                    </h2>
                    <p className="font-light font-sans text-xs dark:text-gray-300">
                      Checkout All the Autumn Collections
                    </p>
                  </div>
                </NavigationMenuLink>

                <NavigationMenuLink className="w-full flex items-center hover:opacity-50">
                  <img src="/Spring.svg" alt="" className="w-12 h-12 mr-3" />
                  <div>
                    <h2 className="text-lg font-black dark:text-white">
                      Spring Collection
                    </h2>
                    <p className="font-light font-sans text-xs dark:text-gray-300">
                      Checkout All the Spring Collections
                    </p>
                  </div>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Collection;
