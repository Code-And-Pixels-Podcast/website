import { useState } from "react";
import Image from "next/image";

import {
	AiOutlineTwitter,
	AiFillYoutube,
	AiOutlineGlobal,
} from "react-icons/ai";
import { BsRssFill } from "react-icons/bs";


import Meta from "../components/Meta";

import HeaderImage from "/public/images/illustration-hero.svg";
import SubscribeImage from "/public/images/illustration-subscribe.svg";

import Hosts from "/public/_assets/data/hosts.json";

import Script from "next/script";

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
		<>
			{/* TODO: Update to use our podcast URL */}
			<Script src="https://www.buzzsprout.com/1958356.js?player=large&container_id=episodelist" />
			<Meta />
			<header className="pt-10 container mx-auto px-6">
				<nav className="flex justify-between">
					<div className="flex w-28 md:!w-40">
						<Image
							width={157}
							height={58}
							src="/images/logo.svg"
							objectFit="contain"
						/>
					</div>
					<ul className="social grid grid-flow-col gap-4">
						<li className="hover:opacity-80 transition-opacity">
							<a
								href="https://www.youtube.com/channel/UC5vCetuHLcgqyC3LD00pUuA"
								target={"_blank"}
								rel="noreferrer noopener"
								className="p-4 flex"
							>
								<AiFillYoutube
									className="tc-base w-8 transition-colors"
									size="2em"
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
						<li className="hover:opacity-80 transition-opacity">
							<a
								href="https://feeds.buzzsprout.com/1958356.rss"
								target={"_blank"}
								rel="noreferrer noopener"
								className="p-4 flex"
							>
								<BsRssFill
									className="tc-base w-6 transition-colors"
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
							Explore the hybrid design technology space with{" "}
							<a
								href="https://twitter.com/adekunleoduye"
								target="_blank"
								rel="noreferrer noopener"
								className="inline-block"
							>
								Adekunle Oduye
							</a>{" "}
							&{" "}
							<span className="inline-block">
								<a
									href="https://twitter.com/kellycodeschaos"
									target={"_blank"}
									rel="noreferrer noopener"
								>
									Kelly Harrop
								</a>
								.
							</span>
						</p>
					</div>
					<div className="col-start-7 col-end-13 row-start-1 row-end-1">
						<Image layout="responsive" src={HeaderImage} />
					</div>
				</section>
				<div className="container mx-auto py-10 md:px-0 my-16">
					<hr className="border-t-gray-600" />
				</div>
				<section className="grid md:grid-cols-3 container mx-auto px-6 gap-8  md:gap-10">
					<div className="col-span-1">
						<h2>Episodes</h2>
					</div>
					<div className="md:col-span-2">
						<p className="leading-relaxed pb-12">
							Listen to episodes with the player below or{" "}
							<a
								href="https://www.youtube.com/channel/UC5vCetuHLcgqyC3LD00pUuA"
								target={"_blank"}
								rel="noreferrer noopener"
							>
								watch us on YouTube
							</a>
							.
						</p>
						<div id="episodelist" className="mb-4" />
						<a
							href="https://feeds.buzzsprout.com/1958356.rss"
							className="no-underline flex items-center"
						>
							<BsRssFill className="inline mr-3" />
							<span>RSS feed</span>
						</a>
					</div>
				</section>
				<div className="container mx-auto py-10 md:px-0 my-16">
					<hr className="border-t-gray-600" />
				</div>
				<section className="grid md:grid-cols-3 gap-8 md:gap-10 container mx-auto pb-36 px-6 md:px-0'">
					<div className="col-span-1">
						<h2>About Us</h2>
					</div>
					<div className="col-span-2">
						<p className="pb-16 leading-relaxed">
							A couple of UX Engineers, navigating the intersection between
							design, development and everything inbetween.
						</p>
						<div className="grid md:grid-cols-2 gap-16">
							{Hosts.map((host) => (
								<article
									key={host.name.toLowerCase().replace(" ", "-")}
									className="sm:mb-16"
								>
									<header>
										<Image
											width={320}
											height={320}
											src={host.imgPath}
											className="rounded-xl"
										/>
										<h3 className="font-sans-bold text-lg pt-5">
											{host.name}, {host.company}
										</h3>
									</header>
									<div>
										<div className="pt-2 flex gap-2">
											<a href={host.website} target="_blank" rel="noreferrer">
												<AiOutlineGlobal
													size={20}
													aria-label={`${host.name}'s website`}
												/>
											</a>
											<a href={host.x} target="_blank" rel="noreferrer">
												<AiOutlineTwitter
													size={20}
													aria-label={`${host.name}'s X profile`}
												/>
											</a>
										</div>
										<p className="text-sm tc-dark pt-4">{host.location}</p>
										<p className="pt-2 text-lg leading-relaxed">{host.bio}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
				<section className="bg-gray-400">
					<div className="container md:grid md:grid-cols-3 px-6 mx-auto py-12 md:gap-10 py-10 md:py-24 md:px-0'">
						<div className="col-span-1 flex justify-center mt-8 md:mt-0 mb-10 md:mb-0 md:mr-6 md:justify-start items-start md:w-auto">
							<div className=" w-[250px] md:w-auto">
								<Image layout="intrinsic" src={SubscribeImage} />
							</div>
						</div>
						<div className="col-span-2 text-center md:text-left">
							<h2>Stay up to date</h2>
							<p className="pt-8 text-xl mb-10">
								Get updates when we launch new episodes. We promise not to spam.
							</p>

							<form
								className="flex flex-col md:flex-row gap-5 text-left"
								onSubmit={handleSubscribe}
							>
								<div className="flex flex-col pt-10">
									<label htmlFor="email" className="tc-darker">
										Email
									</label>
									<input
										className="mt-2 p-4 rounded-lg bg-gray-300 placeholder:text-gray-700 md:w-[400px]"
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
										className="rounded-lg bg-blue-500 font-sans-bold p-4 text-gray-500 hover:bg-blue-400 transition-colors w-full md:w-auto"
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
				<div className="container items-center pt-20 text-center md:text-left mx-auto md:grid grid-cols-2 md:px-2 px-4 py-4">
					<div className="tc-darker text-sm mb-4 md:mb-0">
						Copyright © 2022 Code & Pixels. All rights reserved.
					</div>

					<div className="justify-self-end">
						<div className="tc-darker text-sm">
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
							. View on{" "}
							<a
								href="https://github.com/Code-And-Pixels-Podcast"
								target={"_blank"}
								rel="noreferrer noopener"
							>
								GitHub
							</a>
							.
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
