def binary_search(numbers, lo, hi, target):
    if lo > hi:
        return -1
    if not numbers:
        return -1

    mid = (hi - lo) // 2 + lo

    if numbers[mid] == target:
        return mid
    elif numbers[mid] < target:
        return binary_search(numbers, mid+1, hi, target)
    else:
        return binary_search(numbers, lo, mid-1, target)
        
if __name__ == "__main__":
    numbers = [1,3,4,5,7,11,20,88,100,103]

    lo = 0
    hi = len(numbers) - 1
    target = 99

    ret = binary_search(numbers, lo, hi, target)

    # assert(ret == numbers.index(target) if target in numbers else -1 )
        
    print(ret)



