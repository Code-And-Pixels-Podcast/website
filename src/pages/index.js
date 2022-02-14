import { useState } from "react";
import Image from "next/image";

import { GoMarkGithub } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai";

import Head from "../components/Head";

import HeaderImage from "/public/images/illustration-hero.svg";
import SubscribeImage from "/public/images/illustration-subscribe.svg";

import Hosts from "/public/_assets/data/hosts.json";

export default function Home() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);

	async function handleSubscribe(e) {
		e.preventDefault();
		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				body: JSON.stringify({ email }),
			});

			if (!response.ok) {
				throw Error(
					"Something went wrong. Please contact us at codepixelsfm@gmail.com.",
				);
			}

			const data = await response.json();
			setEmail("");
			setIsError(false);
			setMessage(data.message);
		} catch (error) {
			console.log(error);
			setIsError(true);
			setMessage(error.message);
		}
	}

	return (
		<div>
			<Head />
			<header className="pt-10 container mx-auto px-6">
				<nav className="flex justify-between">
					<Image width={157} height={58} src="/images/logo.svg" />
					<ul className="social grid grid-flow-col gap-4">
						<li className="hover:opacity-80 transition-opacity">
							<a
								href="https://github.com/Code-And-Pixels-Podcast"
								target={"_blank"}
								rel="noreferrer noopener"
								className="p-4 flex"
							>
								<GoMarkGithub
									className="tc-base transition-colors"
									size="1.6em"
								/>
							</a>
						</li>
						<li className="hover:opacity-80 transition-opacity">
							<a
								href="https://twitter.com/CodeandPixelsFM"
								target={"_blank"}
								rel="noreferrer noopener"
								className="p-4 flex"
							>
								<AiOutlineTwitter
									className="tc-base w-8 transition-colors"
									size="2em"
								/>
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="pt-32">
				<section className="md:grid grid-cols-12 gap-4 container mx-auto px-6">
					<div className="col-start-1 col-end-6 row-start-1 row-end-1 grid z-10">
						<h1 className="mb-8">
							A podcast about turning pixels
							<br /> into code.
						</h1>
						<p className="text-2xl items-end py-16 md:py-0 leading-relaxed">
							Explore the hybrid world of UX Engineering with{" "}
							<a
								href="https://twitter.com/adekunleoduye"
								target={"_blank"}
								rel="noreferrer noopener"
							>
								Adekunle Oduye
							</a>{" "}
							&{" "}
							<a
								href="https://twitter.com/kellycodeschaos"
								target={"_blank"}
								rel="noreferrer noopener"
							>
								Kelly Harrop
							</a>{" "}
							.
						</p>
					</div>
					<div className="col-start-7 col-end-13 row-start-1 row-end-1">
						<Image layout="responsive" src={HeaderImage} />
					</div>
				</section>
				<div className="container mx-auto py-10 md:px-0 my-16">
					<hr className="border-t-gray-600" />
				</div>
				<section className="grid md:grid-cols-12 gap-4 container mx-auto pb-36 px-6 md:px-0'">
					<div className="col-span-4">
						<h2>About Us</h2>
					</div>
					<div className="col-span-8">
						<p className="pb-16">
							A couple of UX Engineers, navigating the intersection between
							design, development and everything inbetween.
						</p>
						<div className="grid md:grid-cols-2 gap-10">
							{Hosts.map((host) => (
								<article key={host.name.toLowerCase().replace(" ", "-")}>
									<header>
										<Image width={320} height={320} src={host.imgPath} />
										<h3 className="font-sans-bold text-lg pt-5">
											{host.name}, {host.company}
										</h3>
									</header>
									<div>
										<p className="text-sm tc-dark pt-5">{host.location}</p>
										<p className="pt-2 text-lg leading-relaxed">{host.bio}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
				<section className="bg-gray-400">
					<div className="container mx-auto flex flex-col md:flex-row py-12 md:py-24 gap-10 md:gap-20 px-6 md:px-0'">
						<div>
							<Image width={380} height={264} src={SubscribeImage} />
						</div>
						<div className="justify-self-end">
							<h2>Launching Soon</h2>
							<p className="pt-8 text-xl mb-10">
								Get updates when we launch new episodes. We promise not to spam.
							</p>

							<form
								className="flex flex-col md:flex-row gap-5"
								onSubmit={handleSubscribe}
							>
								<div className="flex flex-col pt-10 flex-1">
									<label htmlFor="email" className="tc-darker">
										Email
									</label>
									<input
										className="mt-2 p-4 rounded-lg bg-gray-300 placeholder:text-gray-700"
										type="email"
										name="email"
										id="email"
										placeholder="hello@codeandpixels.com"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										required
									/>
								</div>
								<div className="flex items-end">
									<button
										type="submit"
										className="rounded-lg bg-blue-500 p-4 text-gray-500 hover:bg-blue-600 transition-colors w-full md:w-auto"
									>
										Subscribe
									</button>
								</div>
							</form>
							{message && (
								<div
									className={`p-4 ${
										isError
											? "bg-red-900 border-red-800"
											: "bg-green-900 border-green-800"
									} rounded-[2px] mt-6 border-2`}
								>
									{message}
								</div>
							)}
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-400 pb-16">
				<div className="container pt-20 mx-auto md:grid grid-cols-2 md:px-2 px-4 py-4">
					<span className="tc-darker text-sm">
						Copyright © 2022 Code & Pixels. All rights reserved.
					</span>

					<div className="justify-self-end">
						<span className="tc-darker text-sm">
							Built with{" "}
							<a
								href="https://nextjs.org/"
								target={"_blank"}
								rel="noreferrer noopener"
							>
								next.js
							</a>{" "}
							&{" "}
							<a
								href="https://tailwindcss.com/"
								target={"_blank"}
								rel="noreferrer noopener"
							>
								tailwind
							</a>
							.
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
}
