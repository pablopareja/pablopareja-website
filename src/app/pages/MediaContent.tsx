"use client";

import ClientOnly from "@/utils/ClientOnly";
import { useResponsive } from "@/utils/useResponsive";
import React, { useState } from "react";
import ModalImage from "react-modal-image";
import Header from "../header";

const DEFAULT_IMAGE = { src: "/images/mediaBackground.jpg", alt: "Media" };

export const MediaContent: React.FC = () => {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  }>(DEFAULT_IMAGE);
  const { useMd, useSm } = useResponsive();

  return (
    <div>
      <ClientOnly>
        <div className="relative h-screen">
          <Header />
          {useMd({ includeBiggerScreens: true }) && (
            <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src="/images/mediaBackground.jpg"
              alt="Media"
              style={{ filter: "grayscale(100%)", zIndex: -1 }}
            />
          )}
          {useSm({}) && (
            <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src="/images/mediaBackground_mobile.png"
              alt="Media"
              style={{ filter: "grayscale(100%)", zIndex: -1 }}
            />
          )}
          <div
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-3xl leading-9 text-white"
            style={{ letterSpacing: "18px" }}
          >
            MEDIA
          </div>
        </div>
        {useMd({ includeBiggerScreens: true }) && (
          <>
            <div className="relative flex w-full mt-24 text-2xl text-white">
              <div className="flex flex-col mr-4" style={{ width: "60%" }}>
                <div className="flex mb-6 ml-32">
                  <ModalImage
                    small="/images/PabloParejaPiano.jpg"
                    large="/images/PabloParejaPiano.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
                <div className="flex">
                  <ModalImage
                    small="/images/Pablo-Pareja-Vancouver.jpg"
                    large="/images/Pablo-Pareja-Vancouver.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
              <div
                className="flex flex-col pr-32 pt-36"
                style={{ width: "40%" }}
              >
                <div className="flex mb-5" role="button">
                  <ModalImage
                    small="/images/Pablo-Pareja-jazz-Zahara.jpg"
                    large="/images/Pablo-Pareja-jazz-Zahara.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
                <div className="flex mr-9">
                  <ModalImage
                    small="/images/mediaBackground.jpg"
                    large="/images/mediaBackground.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
            </div>
            <div className="relative flex w-full mt-4 mb-24 text-2xl text-white">
              <div className="flex flex-col mr-4" style={{ width: "40%" }}>
                <div className="flex mb-6 ml-32">
                  <ModalImage
                    small="/images/PabloParejaSmilingBehindPiano.jpg"
                    large="/images/PabloParejaSmilingBehindPiano.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
                <div className="flex">
                  <ModalImage
                    small="/images/PabloParejaPlayingPianoConcert.jpg"
                    large="/images/PabloParejaPlayingPianoConcert.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
              <div className="flex flex-col" style={{ width: "60%" }}>
                <div className="flex mb-5 mr-32">
                  <ModalImage
                    small="/images/PabloParejaStudioSinging.jpg"
                    large="/images/PabloParejaStudioSinging.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
                <div className="flex">
                  <ModalImage
                    small="/images/PabloParejaStandingGuitar.jpg"
                    large="/images/PabloParejaStandingGuitar.jpg"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {useSm({}) && (
          <div className="flex flex-col">
            <img
              src="/images/PabloParejaPiano.jpg"
              alt="Pablo Pareja playing piano at a recording studio"
            />
            <img
              src="/images/Pablo-Pareja-Vancouver.jpg"
              alt="Pablo Pareja playing piano in Vancouver"
            />
            <img
              src="/images/Pablo-Pareja-jazz-Zahara.jpg"
              alt="Pablo Pareja singing at Jazzahara"
            />
            <img
              src="/images/mediaBackground.jpg"
              alt="Pablo Pareja playing guitar at a recording studio"
            />
            <img
              src="/images/PabloParejaStudioSinging_mobile.jpg"
              alt="Pablo Pareja singing at a recording studio"
            />
            <img
              src="/images/PabloParejaStandingGuitar_mobile.jpg"
              alt="Pablo Pareja standing with a guitar at a recording studio"
            />
          </div>
        )}
      </ClientOnly>
    </div>
  );
};
