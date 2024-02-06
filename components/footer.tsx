import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

const Footer = () => {
	return (
		<footer className="w-full">
			<Separator />
			<div className="flex items-center justify-center w-full p-4">
				<Button variant="ghost">
					cb.sc.i5das21158@cb.students.amrita.edu
				</Button>
			</div>
		</footer>
	);
};

export default Footer;
