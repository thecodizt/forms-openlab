import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Question1 from "./question1";
import Question2 from "./question2";

export function Questions() {
	return (
		<Tabs defaultValue="account" className="w-[550px] m-8">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="question-1">Question 1</TabsTrigger>
				<TabsTrigger value="question-2">Question 2</TabsTrigger>
			</TabsList>
			<TabsContent value="question-1">
				<Question1 />
			</TabsContent>
			<TabsContent value="question-2">
				<Question2 />
			</TabsContent>
		</Tabs>
	);
}
