import React from 'react'
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
// components
import Poster from '../components/Poster/Poster.component';

export const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays in Mumbai</h2>
                        <div className="flex  flex-wrap lg:w-8/12">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314717-vggqgeject-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="English | ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314717-vggqgeject-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="English | ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314717-vggqgeject-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="English | ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314717-vggqgeject-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="English | ₹400"
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="lg:w-3/12">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow","This Weekend"]} />
                            <PlaysFilter title="Language" tags={["English", "Hindi","Marathi"]} />
                            <PlaysFilter title="Categories" tags={["Action", "TComedy","Romance"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;