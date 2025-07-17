---
article: true
order: 1
title: CheckNewPC
---

This article told you how to check the new PC after get it.
<!-- more -->

# Prepare the USB flash disk first
0. Prepare (Only provide Chinese version)
[Download the Software(Chinese)](http://xz.puremcs.top/chfs/shared/CheckNewApps.zip)
[Download Tu Bar Tool Box 2025(Chinese)](http://xz.puremcs.top/chfs/shared/%E5%9B%BE%E5%90%A7%E5%B7%A5%E5%85%B7%E7%AE%B12025.rar)
[How to Set Memtest86](memtest86.md)

# Skip connecting the LAN when started
1. Press Shift + F10 when Windows tell you to connect to Wi-Fi, to bring up the command prompt.
2. Input `taskmgr`, enter , to bring up the Task Manager.
3. Find `OOBENetworkConnectionFlow.exe` and kill the process.

# Running the Program
4. Run the Tu Bar Tool Box
Vital program: AIDA64(Full Function), CPUZ, GPUZ, ASSSDBenchmark(hard drive), Memtest(Memory test，only get infomation after running)
[Senior Tutorial for AIDA64 (Chinese)](https://post.smzdm.com/p/a785w8vg/)
[How to test the memory with Memtest86+ (Chinese)](https://www.bilibili.com/opus/823321479496073315)
[Memtest86+ Tutorial (English)](memtest86.md)
5. Use AIDA64 & HWINF064 to check the hardware
Focus on memory, screen, network card, and hard drive. Strictly inspect all hardware brands, models, and numbers.
If there is a situation that is not right, we must dare to confront it, because it means that the machine is even a refurbished machine.
6. Use ASSSDBenchmark to detect the hard drive
Check whether the power-on time of the hard disk exceeds 100 hours, whether the amount of read and write data exceeds 6T, and whether the degree of power loss exceeds 5%, which represents whether it is a new machine and can be retained as evidence.
7. Stress Test
AIDA64 was used for CPU and memory stress tests, and Furmark was used for graphics card stress tests
At the same time, CoreTemp is used to detect the CPU temperature and GPUZ is used to detect the temperature of the graphics card.
Purpose: Detect whether the heat dissipation is inconsistent with the media machine, detect whether the cooling fan is damaged and idling or does not rotate, detect whether there are stability problems such as overheating and desoldering, and whether the factory silicone grease is clear.
It's a bit of a pain in the game, but it's only going to happen this once, and it's much more effective and meaningful than measuring the machine through game performance later.

> [!tip]
> There is no temperature record in the CPUZ, so a CoreTemp is required, while the temperature detection of the GPUZ is recorded in the "Advanced" tab, which can be found with a little closer inspection.
> After opening the oven software, put them in the front desk to keep an eye on them at all times.
> The GPUZ window may disappear due to a bug at some point.

8. After completing all these things and making sure that the computer is a new machine that you are satisfied with, you can confirm the receipt
9. After restarting, the activation can be carried out normally
