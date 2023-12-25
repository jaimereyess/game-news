import React from 'react'

export const News = () => {
    return (
        <div className="bg-slate-200 text-black text-justify rounded-3xl font-medium">
            <div className="p-4">
                <h4 className="text-center text-4xl">Steam Winter Sale</h4>
                <img src="steam.png" className="float-end m-4  p-2 h-20 w-20" alt="Steam" />
                <p>
                    Steam is one of the biggest gaming platforms in the world, and they always have a massive sale in the wintertime.
                    This year is no exception, and there are plenty of great deals to be had.
                </p>
                <p className="mt-2">
                    The Steam Winter Sales typically start in late December and last for about a week. During this time, thousands of
                    games are discounted, with some games seeing discounts of up to 90% off their regular price. This is a great
                    opportunity for gamers to pick up some great titles at a fraction of the cost.
                </p>
            </div>
        </div>
    )
}
