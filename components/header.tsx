import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Header = () => {
	return (
		<header className="w-full">
			<div className="flex justify-between items-center p-2">
				<Button variant="ghost">
					<div className="text-lg font-medium text-primary">
						Open Lab - Sowndharya Lakshmi G
					</div>
				</Button>
				<ThemeToggle />
			</div>
			<Separator />
		</header>
	);
};

export default Header;
