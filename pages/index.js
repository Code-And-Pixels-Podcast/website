import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { GoLinkExternal, GoMarkGithub } from "react-icons/go"
import { AiOutlineTwitter } from "react-icons/ai"
import Hosts from "../public/_assets/data/hosts.json"


export default function Home() {
	return (
		<div>
			<Head>
				<title>Code & Pixels</title>
				<meta name="description" content="Explore the hybrid world of UX Engineering with Adekunle Oduye & Kelly Harrop" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className='pt-10 container mx-auto px-6 md:px-0'>
				<nav >
					<ul className='flex w-full items-center gap-6'>
						<li className="md:pr-14">
							<Image width={157} height={58} src="/images/logo.png" />
						</li>
						<li className='flex-1'>
							<Link href="#">
								<a className='tc-base flex no-underline place-items-center'>Merch <GoLinkExternal className='pl-2 w-[1.25rem] h-[1.25rem]'/> </a>
							</Link>
						</li>
						<li>
							<a href="#">
								<GoMarkGithub className='tc-base w-[1.25rem] h-[1.25rem]'/> 
							</a>
						</li>
						<li>
							<a href="#">
								<AiOutlineTwitter className='tc-base w-[1.25rem] h-[1.25rem]'/> 
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="pt-20">
				<section className="md:grid grid-cols-12 gap-4 border-b-gray-600 border-b-2 pb-16 mb-16 container mx-auto px-6 md:px-0">
					<div className="col-start-1 col-end-6 row-start-1 row-end-1 grid z-10">
						<h1>
              A podcast about turning pixels into code.
						</h1>
						<p className="text-2xl items-end py-16 md:py-0">
              Explore the hybrid world of UX Engineering with <a href="#">Adekunle Oduye</a> & <a href="#">Kelly Harrop</a> .
						</p>
					</div>
					<div className="col-start-6 col-end-12 row-start-1 row-end-1">
						<img src="/images/illustration-hero.svg" alt="" />							
						{/* <Image width={800} height={439} src="/images/hero-illustration.svg" /> */}
					</div>
				</section>
				<section className="grid md:grid-cols-12 gap-4 container mx-auto pb-36 px-6 md:px-0'">
					<div className="col-span-4">
						<h2>About Us</h2>
					</div>
					<div className="col-span-8">
						<p className="pb-10">
              A couple of UX Engineers, navigating the intersection between design, development and everything inbetween.
						</p>
						<div className="grid md:grid-cols-2 gap-10">
							{Hosts.map((host) => (
								<article key={host.name.toLowerCase().replace(" ", "-")}>
									<header>
										<img src={host.imgPath} alt="" />
										<h3 className="font-sans-bold text-lg pt-5">{host.name}, {host.company}</h3>
									</header>
									<div>
										<p className="text-sm tc-dark pt-5">{host.location}</p>
										<p className="pt-2">{host.bio}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
				<section className="bg-gray-400">
					<div className="container mx-auto flex flex-col md:flex-row py-12 md:py-24 gap-10 md:gap-20 px-6 md:px-0'">
						<div>
							<Image width={380} height={264} src="/images/illustration-subscribe.svg" />
						</div>
						<div className="justify-self-end">
							<h2>Launching Soon</h2>
							<p className="pt-8 text-2xl">
              Get updates when we launch new episodes. We promise not to spam.
							</p>

							<div className="flex flex-col md:flex-row gap-5">
								<div className="flex flex-col pt-10 flex-1">
									<label htmlFor="email" className="tc-darker">Email</label>
									<input className="mt-2 p-4 rounded-sm bg-gray-300 placeholder:text-gray-700" type="email" name="email" id="email" placeholder="hello@codeandpixels.com" />
								</div>
								<div className="flex items-end">
									<button type="submit" className="rounded-sm bg-blue-500 p-4 text-gray-500 hover:bg-blue-600 transition-colors w-full md:w-auto">Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-gray-400">
				<div className="container mx-auto md:grid grid-cols-2 md:px-2 px-4 py-4">
					<div>
						<span className='tc-darker text-sm'>Copyright © 2022 Code & Pixels. All rights reserved.</span>
					</div>
					<div className='justify-self-end'>
						<span className="tc-darker text-sm">Built with <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer noopener">next.js</a> & <a href="https://tailwindcss.com/" target={"_blank"} rel="noreferrer noopener">tailwind</a>.</span>
					</div>
				</div>
			</footer>
		</div>
	)
}
