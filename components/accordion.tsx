export type AccordionProps = {
	title: string;
	children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => (
	<details className="group rounded-lg open:bg-white open:shadow-xl">
		<summary className="font-medium hover:cursor-pointer group-open:border-0 border-green border rounded-md p-4 group-hover:bg-gradient-to-r group-hover:from-green/20 group-hover:to-dull">
			{title}
		</summary>
		<div className="mt-3 p-4">{children}</div>
	</details>
);
